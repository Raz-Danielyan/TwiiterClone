import { axios } from "../../core/axios";
import { Tweet } from "../../store/ducks/Tweets/contracts/tweets";
import { TwetsState } from "../../store/ducks/Tweets/contracts/tweets";
import { LoginFormProps } from '../../pages/components/LoginModal';
import { UserStateData } from "../../store/ducks/User/contracts/user";
import { RegisterFormProps } from "../../pages/components/RegisterModal";
interface Response<T> {
  status: string;
  data: T
}

export const TweetsApi = {
  async fetchTweets(userId?: string): Promise<Tweet[]> {
    const { data } = await axios.get<Response<Tweet[]>>(userId ? `/tweets/user/${userId}` : '/tweets');
    return data.data;
  },
  async fetchTags(): Promise<TwetsState['items']> {
    return await axios.get('/tags').then(({ data }) => data);
  },
  async fetchTweet(id: string): Promise<Tweet> {
    const { data } = await axios.get<Response<Tweet>>('/tweets/' + id);
    return data.data;
  },
  async fetchAddTweet(payload: { text: string, image: string[] }): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>('/tweets', payload);
    return data.data;
  },
  async signIn(postData: LoginFormProps): Promise<UserStateData> {
    const { data } = await axios.post<Response<UserStateData>>('/auth/login', { username: postData.email, password: postData.password });
    return data.data;
  },
  async signUp(postData: RegisterFormProps): Promise<UserStateData> {
    const { data } = await axios.post<Response<UserStateData>>('/auth/singnup', { email: postData.email, username: postData.username, fullname: postData.fullname, password: postData.password });
    return data.data;
  },
  async getMe(): Promise<UserStateData> {
    const { data } = await axios.get<Response<UserStateData>>('/users/me');
    return data.data;
  },
  fetchRemoveTweet: async (id: string): Promise<void> => await axios.delete('/tweets/' + id)
};