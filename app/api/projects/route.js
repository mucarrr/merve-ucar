import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = 'portfolyo';

export async function GET() {
  try {
    if (!MONGODB_URI) {
      return Response.json({ success: false, message: 'MongoDB URI not configured' }, { status: 500 });
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const db = client.db(MONGODB_DB);
    const projects = await db.collection('projects').find({}).sort({ order: 1 }).toArray();
    
    await client.close();
    
    return Response.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return Response.json({ success: false, message: 'Failed to fetch projects' }, { status: 500 });
  }
}
