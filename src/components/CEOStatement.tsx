
const CEOStatement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <img 
              src="/lovable-uploads/37d192fa-ef0b-4809-b123-c4b85c07836e.png"
              alt="John Kasno, CEO of Kasno Builders"
              className="w-64 h-64 rounded-full object-cover mx-auto shadow-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              A Word from Our <span className="text-red-600">CEO</span>
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              "At Kasno Builders, we create lasting legacies through exceptional construction. Our commitment to excellence and client satisfaction drives us to deliver quality projects that transform communities."
            </blockquote>
            <div className="text-lg font-semibold text-blue-900">
              <p>Novath Mhagama</p>
              <p className="text-red-600">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOStatement;
