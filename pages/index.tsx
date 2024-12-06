import { CategoryGroup } from "@/components/survey/CategoryGroup";
import { surveyCategories, categoryGroups } from "@/lib/survey-categories";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-indigo-50 text-indigo-600 mb-4">
              Free Survey Templates
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Survey Question Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our collection of professionally crafted survey questions.
            Copy and use them for your research, feedback collection, or
            customer insights.
          </p>
        </div>

        {categoryGroups.map((group, index) => (
          <CategoryGroup
            key={group.name}
            name={group.name}
            description={group.description}
            color={group.color}
            categories={surveyCategories.filter((cat) =>
              group.categories.includes(cat.slug as never)
            )}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
