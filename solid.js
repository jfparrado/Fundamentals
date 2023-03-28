//primera capa
class IUserRepository {
  save(user) {}
  findById(id) {}
  update(id, user) {}
  delete(id) {}
}
//segunda capa
class UserRepository extends IUserRepository {
  save(user) {
    // Lógica
  }

  findById(id) {
    // Lógica
  }

  update(id, user) {
    // Lógica
  }

  delete(id) {
    // Lógica
  }
}
// tercera capa
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  createUser(user) {
    this.userRepository.save(user);
  }

  readUser(id) {
    return this.userRepository.findById(id);
  }

  updateUser(id, user) {
    this.userRepository.update(id, user);
  }

  deleteUser(id) {
    this.userRepository.delete(id);
  }
}
//capa final
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
