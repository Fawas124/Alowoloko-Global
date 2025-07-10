import galleryImages from '../data/galleryImages'

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Projects Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View some of our completed projects and material samples
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={`/images/gallery/${image.src}`} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery