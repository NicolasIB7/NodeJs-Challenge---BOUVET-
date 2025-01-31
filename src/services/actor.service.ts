import db from "../config/db";

interface Data {
  name: string;
  lastName: string;
  birthDate: string;
}

export const addActor = async (data: Data) => {
  try {
    const name = data.name;
    const lastName = data.lastName;
    const birthDate = data.birthDate;

    const newActor = await db.models.Actor.create({
      name,
      lastName,
      birthDate,
    });
    

    return newActor;
  } catch (error: any) {
    throw error;
  }
};
