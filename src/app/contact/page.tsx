import Link from 'next/link'

export default function Contact() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="mb-4">
        We&apos;d love to hear from you! If you have any questions or would like to request our services, 
        please don&apos;t hesitate to get in touch.
      </p>
      <div className="bg-gray-100 p-6 rounded mb-8">
        <h2 className="text-2xl font-semibold mb-4">WhatsApp Us</h2>
        <p className="mb-4">
          For quick responses and service requests, contact us on WhatsApp:
        </p>
        <Link 
          href="https://wa.me/2347036026969" 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Our WhatsApp number: +234 703 602 6969
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

