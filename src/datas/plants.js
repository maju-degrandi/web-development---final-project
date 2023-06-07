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
			id: 1,
			isBestSale: true,
			light: 2,
			water: 3,
			cover: monstera,
			price : 7.00,
			description : 'Something here',
			stock: 10
		},
		{
			name: 'Ficus lyrata',
			category: 'classic',
			id: 2,
			isBestSale: false,
			light: 3,
			water: 1,
			cover: ficus_lyrata,
			price : 6.00,
			description : 'Something here',
			stock: 10
		},
		{
			name: 'Silver pothos',
			category: 'classic',
			id: 3,
			isBestSale: true,
			light: 1,
			water: 2,
			cover: silver_pothos,
			price : 7.00,
			description : 'Something here',
        stock: 10
		},
		{
			name: 'Yucca',
			category: 'classic',
			id: 4,
			isBestSale: true,
			light: 3,
			water: 1,
			cover: yucca,
			price : 11.00,
			description : 'Something here',
			stock: 10
		},
		{
			name: 'Olive tree',
			category: 'exterior',
			id: 5,
			isBestSale: false,
			light: 3,
			water: 1,
			cover: olive_tree,
			price : 7.80,
			description : 'Something here',
			stock: 10
		},
		{
			name: 'Geranium',
			category: 'exterior',
			id: 6,
			isBestSale: true,
			light: 2,
			water: 2,
			cover: geranium,
			price : 10.00,
			description : 'Something here',
			stock: 10
		},
		{
			name: 'Basil',
			category: 'exterior',
			id: 7,
			isBestSale: false,
			light: 2,
			water: 3,
			cover: basil,
			price : 7.00,
			description : 'Something here',
			stock: 9
		},
		{
			name: 'Aloe',
			category: 'succulent',
			id: 8,
			isBestSale: false,
			light: 2,
			water: 1,
			cover: aloe,
			price : 9.00,
			description : 'Something here',
			stock: 7
		},
		{
			name: 'Succulent',
			category: 'succulent',
			id: 9,
			isBestSale: false,
			light: 2,
			water: 1,
			cover: succulent,
			price : 7.00,
			description : 'Something here',
			stock: 10
		}
	]
}