import MainLayout from '@/components/MainLayout';

export default function NewsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">News</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest news and updates from our company.
        </p>
      </div>
    </MainLayout>
  );
}

