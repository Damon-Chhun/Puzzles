import { build, fake } from "test-data-bot";

const buildUser = build("User").fields({
  firstName: fake(f => f.name.firstName()),
  lastName: fake(f => f.name.lastName()),
  email: fake(f => f.internet.email()),
  password: fake(f => f.internet.password())
});

export { buildUser };
