import mongoose, { Schema } from 'mongoose';

const MemberSchema = new Schema({
    id: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    memberCardNumber: { type: String },
    policyNumber: { type: String },
    dataOfBirth: { type: Date }
});

const Member = mongoose.model('members', MemberSchema);

export { Member }