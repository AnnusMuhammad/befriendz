import TopicModel from "../../database/models/topic.model.js";
import mongoose from "mongoose";
const findAll = async () => {
  const resp = await TopicModel.find({}).sort({ _id: -1 });
  return { data: { topics: resp } };
};
const findAllByIds = async (ids) => {
  const validIds = ids.filter((id) => mongoose.Types.ObjectId.isValid(id));
  const resp = await TopicModel.find({ _id: { $in: validIds } });
  return validIds;
};
const TopicService = {
  findAll,
  findAllByIds,
};
export default TopicService;
