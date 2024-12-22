
import Image from "next/image";

export default function Products() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="relative">
          <Image
            src="/images/Featured Products.png" // Correct path to the image in the public folder
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300} // Adjusted height for responsiveness
          />
        </div>

        {/* Product 2 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (3).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 3 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (2).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 4 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (1).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 5 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (4).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 6 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (6).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 7 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (5).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>

        {/* Product 8 */}
        <div className="relative">
          <Image
            src="/images/Featured Products (7).png"
            alt="Product"
            className="object-cover w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
      <button className="border-2 border-yellow-700 text-yellow-700 py-2 px-6 transition duration-300 hover:bg-yellow-700 hover:text-white">
  Show More
</button>

      </div>
    </div>
  );
}
