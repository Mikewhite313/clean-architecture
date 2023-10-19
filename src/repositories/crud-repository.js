class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(formData) {
    return await this.model.create(formData);
  }

  async findOne(filteredQuery) {
    return await this.model.findOne(filteredQuery);
  }

  async update(filteredQuery, formData) {
    return await this.model.findOneAndUpdate(filteredQuery, formData, {
      new: true,
    });
  }

  async delete(filteredQuery) {
    return await this.model.findOneAndDelete({ name: filteredQuery });
  }

  async findAll(filteredQuery) {
    return await this.model.find(filteredQuery);
  }

  // Add other common database operations as needed
}

module.exports = BaseRepository;
