// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      try {
        // Here you would typically:
        // 1. Validate the data
        // 2. Send an email using a service like SendGrid, Mailgun, etc.
        // 3. Or save to a database
        
        console.log('Contact form submission:', { name, email, message });
        
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }