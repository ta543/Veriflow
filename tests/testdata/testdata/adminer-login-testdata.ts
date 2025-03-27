export type AdminerCredential = {
  server: string;
  username: string;
  password: string;
  database: string;
};

export const AdminerLoginTestData: {
  [key: string]: AdminerCredential;
} = {
  veriflowtimescale: {
    server: 'veriflow_timescale',
    username: 'admin',
    password: 'admin',
    database: 'veriflow_timescale'
  },
  veriflowtimescaletest1: {
    server: 'veriflow_test_1',
    username: 'admin',
    password: 'admin',
    database: 'veriflow_test_1'
  },
  veriflowtimescaletest2: {
    server: 'veriflow_test_2',
    username: 'admin',
    password: 'admin',
    database: 'veriflow_test_2'
  }
};
