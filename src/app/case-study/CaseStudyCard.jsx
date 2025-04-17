// /src/components/CaseStudyCard.jsx

function CaseStudyCard({ study, getIcon }) {
  return (
    <div className="rounded-lg border shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={study.imageUrl} alt={study.title} />
      <div className="p-4">
        <div className="flex items-center mb-2">
          {getIcon(study.icon)}
          <h3 className="ml-2 text-xl font-semibold">{study.title}</h3>
        </div>
        <p className="text-gray-600">{study.description}</p>
        <span className="mt-4 inline-block text-indigo-600 font-medium">{study.category}</span>
      </div>
    </div>
  );
}

export default CaseStudyCard;
