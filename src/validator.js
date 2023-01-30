export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const re = /^[\d_-]|[^a-zA-Z0-9_-]|[0-9]{4,}|[\d_-]$/;
    if (re.test(this.nickname)) {
      return 'Недопустимый никнейм';
    }
    return 'Никнейм в порядке';
  }
}
