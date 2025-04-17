import { memo } from 'react';

const TechnicalDetails = memo(function TechnicalDetails({ project }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Technical Details
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Architecture
          </h3>
          <p className="text-slate-700 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Implementation Challenges
          </h3>
          <p className="text-slate-700 leading-relaxed">
            {project.implementationChallenges}
          </p>
        </div>

        {project.codeSnippet && (
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Code Snippet
            </h3>
            <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
});

export default TechnicalDetails;