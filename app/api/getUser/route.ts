import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('smartcaredb'); // Replace with your actual database name

    const testCollection = db.collection('users'); // Replace with an existing collection name
    const documents = await testCollection.find({}).toArray();

    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error querying testCollection:', error);
    return NextResponse.error();
  }
}
