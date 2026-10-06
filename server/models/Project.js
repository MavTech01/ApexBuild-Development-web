import mongoose from 'mongoose'

function slugify(text) {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      default: function () {
        return slugify(this.title)
      },
    },
    category: {
      type: String,
      required: [true, 'Project category is required'],
      trim: true,
    },
    categorySlug: {
      type: String,
      trim: true,
      lowercase: true,
      default: function () {
        return slugify(this.category)
      },
    },
    location: {
      type: String,
      required: [true, 'Project location is required'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Project year is required'],
      min: [1900, 'Year must be after 1900'],
      max: [2100, 'Year must be before 2100'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ['Completed', 'Under Construction', 'Planning'],
        message: '{VALUE} is not a valid status',
      },
      default: 'Completed',
    },
    scope: {
      type: String,
      trim: true,
      default: '',
    },
    client: {
      type: String,
      trim: true,
      default: '',
    },
    area: {
      type: String,
      trim: true,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    highlights: {
      type: [String],
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
    image: {
      src: {
        type: String,
        default: function () {
          return this.images && this.images.length > 0 ? this.images[0] : ''
        },
      },
      alt: {
        type: String,
        default: function () {
          return this.title || ''
        },
      },
      width: { type: Number, default: 960 },
      height: { type: Number, default: 640 },
    },
  },
  {
    timestamps: true,
  }
)

// Ensure slug and image normalization before validation
projectSchema.pre('validate', function () {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title)
  }
  if (this.category && !this.categorySlug) {
    this.categorySlug = slugify(this.category)
  }
  if (this.images && this.images.length > 0 && !this.image?.src) {
    this.image = {
      src: this.images[0],
      alt: this.title || '',
      width: 960,
      height: 640,
    }
  } else if (this.image?.src && (!this.images || this.images.length === 0)) {
    this.images = [this.image.src]
  }
})

const Project = mongoose.model('Project', projectSchema)

export default Project
