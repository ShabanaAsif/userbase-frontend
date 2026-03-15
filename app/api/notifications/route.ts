import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Notification from '@/lib/models/Notification';
import User from '@/lib/models/User';
import { authenticateRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = authenticateRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    // Get notifications for the user based on role or specific targeting
    const notifications = await Notification.find({
      $or: [
        { targetUsers: user.userId },
        { targetRoles: user.role },
        { targetRoles: { $exists: false }, targetUsers: { $exists: false } } // public notifications
      ],
      isActive: true,
    }).populate('createdBy', 'name').sort({ createdAt: -1 });

    return NextResponse.json({ notifications });
  } catch (error) {
    console.error('Get notifications error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authUser = authenticateRequest(request);
    if (!authUser || authUser.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const { title, message, targetUsers, targetRoles } = await request.json();

    if (!title || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const notification = await Notification.create({
      title,
      message,
      targetUsers: targetUsers || [],
      targetRoles: targetRoles || [],
      createdBy: authUser.userId,
    });

    return NextResponse.json({
      message: 'Notification created successfully',
      notification,
    });
  } catch (error) {
    console.error('Create notification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}