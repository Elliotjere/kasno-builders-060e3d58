
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
              "At Kasno Builders, we don't just construct buildings; we create lasting legacies. Our commitment to excellence, innovation, and client satisfaction has been the cornerstone of our success for over two decades. Every project we undertake is a testament to our dedication to quality and our vision of transforming communities through exceptional construction."
            </blockquote>
            <div className="text-lg font-semibold text-blue-900">
              <p>John Kasno</p>
              <p className="text-red-600">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOStatement;
