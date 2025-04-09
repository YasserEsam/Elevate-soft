//components/sections/services/TestimonialCard.jsx
export const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transition-all">
        <div className="mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-500 inline-block">★</span>
          ))}
        </div>
        <p className="text-gray-700 italic mb-6">&quot;{testimonial.content}&quot;</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
            {testimonial.author.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
            <p className="text-xs text-indigo-600 mt-1">{testimonial.service}</p>
          </div>
        </div>
      </div>
    );
  };