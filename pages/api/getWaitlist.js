import clientPromise from '../../lib/db'; // Adjust the path as necessary

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('Cluster0'); // Replace with your database name

      // Assuming you're adding to a waitlist collection
      const data = await db.collection('waitlist').insertOne(req.body);
      res.status(200).json({ message: 'Successfully added to waitlist', data });
    } catch (error) {
      console.error('Database connection error:', error);
      res.status(500).json({ message: 'Database connection error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
