type EnvFunction = (
  key: string,
  defaultValue?: string | boolean
) => string | boolean;

const config = ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env("FLAG_NPS", true) as boolean,
    promoteEE: env("FLAG_PROMOTE_EE", true) as boolean,
  },
});

export default config;
