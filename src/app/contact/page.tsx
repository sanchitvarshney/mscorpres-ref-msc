import MainLayout from '@/components/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us for any inquiries or support.
        </p>
      </div>
    </MainLayout>
  );
}

