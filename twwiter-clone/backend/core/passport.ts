import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTstrategy, ExtractJwt } from "passport-jwt";
import { userModel, UserModelInterface } from "../models/userModal";
import { generteMd5 } from "../utils/generatehash";

passport.use(new LocalStrategy(async (username, password, done): Promise<void> => {
  try {
    const user = await userModel.findOne({ $or: [{ email: username }, { username }] }).exec();

    if (!user) {
      return done(null, false);
    }
    if (user.password === generteMd5(password + process.env.SECRET_KEY)) {
      return done(null, user);
    } else {
      done(null, false);
    };
  } catch (e) {
    done(e, false);
  };
}
));

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY || "imnotUnderstandWhatIDo",
      jwtFromRequest: ExtractJwt.fromHeader('token'),
    },
    async (payload: { data: UserModelInterface }, done) => {
      try {
        const user = await userModel.findById(payload.data._id).exec();

        if (user) {
          done(null, user);
          return;
        };

        done(null, false);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, (err: any, user: any) => {
    done(err, user);
  });
});

export { passport };