const Reviews = () => {
  return (
      <div>
        <div className='flex items-center justify-center gap-3 mt-12'>
          <button className="rounded-[20px] text-[20px] border border-gray-400 py-2 px-4 xl:w-[187px] xl:h-[60px]">Description</button>
          <button className="text-white text-[20px] bg-customBlue rounded-[20px] py-2 px-6 xl:w-[187px] xl:h-[60px]">Reviews</button>
        </div>
        <div className="border border-1 border-gray-400 rounded-lg mt-6 p-6">
          <div className="w-full">
            <h2 className="text-lg font-bold mb-2 text-customBlue">Customer reviews</h2>
            <p className='text-gray-600'>No reviews yet</p>
            <button className='text-white bg-customBlue mt-2 px-4 py-2 underline'>Write a review</button>
          </div>
        </div>
      </div>
  )
}

export default Reviews;