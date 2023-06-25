import monstera from '../assets/monstera.jpg'
import ficus_lyrata from '../assets/ficus-lyrata.jpg'
import silver_pothos from '../assets/silver-pothos.jpg'
import yucca from '../assets/yucca.jpg'
import olive_tree from '../assets/olive-tree.webp'
import geranium from '../assets/geranium.webp'
import basil from '../assets/basil.jpg'
import aloe from '../assets/aloe.jpg'
import succulent from '../assets/succulent.webp'

export const plants = {
	"Plants": [
		{
			name: 'Monstera',
			category: 'classic',
			light: 2,
			water: 3,
			cover: monstera,
			price: 7.00,
			description: 'The Monstera is a popular indoor plant known for its large, glossy leaves. It is relatively easy to care for and can thrive in various light conditions.',
			stock: 10
		  },
		  {
			name: 'Ficus lyrata',
			category: 'classic',
			light: 3,
			water: 1,
			cover: ficus_lyrata,
			price: 6.00,
			description: 'The Ficus lyrata, commonly known as the fiddle-leaf fig, is a striking plant with large, violin-shaped leaves. It requires bright indirect light and regular watering.',
			stock: 10
		  },
		  {
			name: 'Silver pothos',
			category: 'classic',
			light: 1,
			water: 2,
			cover: silver_pothos,
			price: 7.00,
			description: 'The Silver Pothos, also known as the Satin Pothos, is a trailing vine with heart-shaped leaves featuring silver variegation. It is a low-maintenance plant that can tolerate lower light conditions.',
			stock: 10
		  },
		  {
			name: 'Yucca',
			category: 'classic',
			light: 3,
			water: 1,
			cover: yucca,
			price: 11.00,
			description: 'The Yucca is a desert plant known for its spiky leaves and architectural form. It thrives in bright light and requires minimal watering.',
			stock: 10
		  },
		  {
			name: 'Olive tree',
			category: 'exterior',
			light: 3,
			water: 1,
			cover: olive_tree,
			price: 7.80,
			description: 'The Olive Tree is an evergreen tree that is commonly grown for its edible olives and attractive foliage. It prefers full sun and well-drained soil.',
			stock: 10
		  },
		  {
			name: 'Geranium',
			category: 'exterior',
			light: 2,
			water: 2,
			cover: geranium,
			price: 10.00,
			description: 'Geraniums are popular flowering plants known for their vibrant blooms and aromatic foliage. They thrive in full sun or partial shade and require regular watering.',
			stock: 10
		  },
		  {
			name: 'Basil',
			category: 'exterior',
			light: 2,
			water: 3,
			cover: basil,
			price: 7.00,
			description: 'Basil is a culinary herb widely used for its aromatic leaves that add flavor to various dishes. It prefers full sun and consistent moisture.',
			stock: 9
		  },
		  {
			name: 'Aloe',
			category: 'succulent',
			light: 2,
			water: 1,
			cover: aloe,
			price: 9.00,
			description: 'Aloe plants are succulents known for their fleshy leaves and medicinal properties. They require bright indirect light and infrequent watering.',
			stock: 7
		  },
		  {
			name: 'Succulent',
			category: 'succulent',
			light: 2,
			water: 1,
			cover: succulent,
			price: 7.00,
			description: 'Succulents are a diverse group of plants that store water in their leaves, stems, or roots. They come in various shapes and sizes and are known for their low water requirements.',
			stock: 10
		  }
		  
	]
}