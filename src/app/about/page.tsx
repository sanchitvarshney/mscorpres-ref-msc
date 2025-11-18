import MainLayout from '@/components/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our company and our commitment to excellence in cargo and logistics.
        </p>
      </div>
    </MainLayout>
  );
}

