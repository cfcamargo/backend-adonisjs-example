import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Cristian Camargo',
        email: 'admin@camargo.com',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'Priscila Escobar',
        email: 'normal@camargo.com',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
