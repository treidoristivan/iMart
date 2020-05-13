export const TrainingLevel = {
  EASY: "8",
  MIDDLE: "10",
  HARD: "11",
};

export class Training {
  constructor(title, duration, level, image) {
    this.title = title;
    this.duration = duration;
    this.level = level;
    this.image = image;
  }

  get formattedLevel() {
    return ` Iphone ${this.level} `;
  }

  get formattedDuration() {
    return `Rp. ${this.duration} ,00`;
  }

  static chestEasy() {
    return new Training(
      "16GB/256GB",
      25,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-1.jpg")
    );
  }

  static workoutEasy() {
    return new Training(
      "16GB/64GB",
      7000000,
      TrainingLevel.EASY,
      require("../../../assets/trainings/image-training-2.jpg")
    );
  }

  static personalizedEasy() {
    return new Training(
      "32GB/128GB",
      11000000,
      TrainingLevel.MIDDLE,
      require("../../../assets/trainings/image-training-3.jpg")
    );
  }

  static chestMiddle() {
    return new Training(
      "64GB/512GB",
      25000000,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-4.jpg")
    );
  }

  static bicepsMiddle() {
    return new Training(
      "64GB/512GB",
      25000000,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-5.jpg")
    );
  }

  static personalizedMiddle() {
    return new Training(
      "64GB/512GB",
      25000000,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-1.jpg")
    );
  }

  static chestHard() {
    return new Training(
      "16GB/128GB",
      7000000,
      TrainingLevel.EASY,
      require("../../../assets/trainings/image-training-2.jpg")
    );
  }

  static bicepsHard() {
    return new Training(
      "16GB/128GB",
      11000000,
      TrainingLevel.MIDDLE,
      require("../../../assets/trainings/image-training-3.jpg")
    );
  }

  static workoutHard() {
    return new Training(
      "64GB/512GB",
      25000000,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-4.jpg")
    );
  }
}
