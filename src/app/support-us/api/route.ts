import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import Investor from '@/models/Investor';
import Expert from '@/models/Expert';
import GameDeveloper from '@/models/GameDeveloper';
import Gamer from '@/models/Gamer';

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    
    const formData = await req.json();

    if (!formData?.userRole) {
      return NextResponse.json({ 
        success: false, 
        message: 'User role is required' 
      }, { status: 400 });
    }

    const { userRole, ...data } = formData;
    let supporter;

    try {
      switch (userRole) {
        case 'investor':
          supporter = await Investor.create(data);
          break;
        case 'expert':
          supporter = await Expert.create(data);
          break;
        case 'developer':
          supporter = await GameDeveloper.create(data);
          break;
        case 'gamer':
          supporter = await Gamer.create(data);
          break;
        default:
          throw new Error("Sorry We Are Currently Under Maintenance. Please Try Again Later.");
      }

      return NextResponse.json({
        success: true,
        data: {
          id: supporter._id.toString(),
          role: userRole
        },
        message: 'Support request submitted successfully'
      }, { 
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      });

    } catch (dbError: unknown) {
      return NextResponse.json({
        success: false,
        message: dbError instanceof Error ? dbError.message : 'Database error'
      }, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
