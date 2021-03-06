import ICat from './ICat'
import CreateCatDTO from './dto/create-cat.dto';

export default class CatsService {
  private readonly cats: ICat[] = []

  constructor() { }

  async findAll(): Promise<ICat[]> {
    return this.cats
  }

  async createCat(catDTO: CreateCatDTO): Promise<void> {
    const newCat = { name: catDTO.name, id: Math.random().toString() }
    this.cats.push(newCat)
  }

  async editCat(id: string, catDTO: CreateCatDTO): Promise<void> {
    const cat = this.cats.find(c => c.id === id)
    if (!cat) {
      throw new Error('No cat to edit found!')
    }
    Object.assign(cat, catDTO)
  }
}
