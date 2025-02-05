import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema);

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return res.status(500).json({ message: 'Database connection error' });
  }

  if (req.method === 'POST') {
    console.log(req.body); // Log the incoming data
    const { firstName, lastName, email } = req.body;

    // Validate input
    if (!firstName || !lastName || !email) {
      console.log("Validation error: All fields are required.");
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const newEntry = new Waitlist({ firstName, lastName, email });
      await newEntry.save();
      return res.status(200).json({ message: 'Successfully added to the waitlist!' });
    } catch (error) {
      console.error("Error saving to waitlist:", error);
      return res.status(500).json({ message: 'Failed to add to waitlist' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
