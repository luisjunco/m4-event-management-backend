import { model, Schema, Model, InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);

type UserType = InferSchemaType<typeof userSchema>

const User: Model<UserType> = model("User", userSchema);

export default User;
