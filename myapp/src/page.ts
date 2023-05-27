import { Collection } from "mongodb";

export const returnURL = async (collection: Collection) => {
  const urlList = await collection.find().toArray();
  // a nmber id from mongo cannot be seraizbale

  const seraizledURL = urlList.map((elem) =>
    JSON.parse(
      JSON.stringify(elem, (key, value) =>
        key === "_id" ? value.toString(value) : value
      )
    )
  );
  console.log(seraizledURL);

  return seraizledURL;
};
