import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET() {
  try {
    console.log('API: Connecting to MongoDB...');
    await connectDB();
    console.log('API: Connected to MongoDB');
    
    const projects = await Project.find({})
      .sort({ is_featured: -1, updated_at: -1 })
      .limit(20);
    
    console.log('API: Found projects:', projects.length);
    console.log('API: First project:', projects[0]);
    
    return Response.json({ 
      success: true, 
      projects 
    });
    
  } catch (error) {
    console.error('API: Projects fetch error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
