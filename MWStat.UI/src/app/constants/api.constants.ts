export class ApiConstants {
    public static ENDPOINT = 'https://localhost:7294/';
    public static STATISTIC_GET_USER_INFO = ApiConstants.ENDPOINT + 'Statistic/GetUserInfo/';
    public static STATISTIC_UPDATE_FOLLOWERS_AND_FOLLOWING = ApiConstants.ENDPOINT + 'Statistic/UpdateFollowersAndFollowing/';
    public static STATISTIC_GET_FOLLOWERS_AND_FOLLOWING = ApiConstants.ENDPOINT + 'Statistic/GetFollowersAndFollowing';
    public static ACCOUNT_LOGIN = ApiConstants.ENDPOINT + 'Account/Login';
    public static ACCOUNT_LOGOUT = ApiConstants.ENDPOINT + 'Account/Logout/';
    public static ACCOUNT_GET_USER_INFO = ApiConstants.ENDPOINT + 'Account/GetUserInfo/';
    public static PROFILE_INTERACTION_FOLLOW = ApiConstants.ENDPOINT + 'ProfileInteraction/Follow';
    public static PROFILE_INTERACTION_UNFOLLOW = ApiConstants.ENDPOINT + 'ProfileInteraction/Unfollow';
    public static USERS_WHO_NOT_FOLLOWING_BACK = ApiConstants.ENDPOINT + 'Statistic/GetUsersWhoDontFollowBack';

    public static RELATION_TYPE = {
        Follower: 0,
        Following: 1,
        NewFollower: 2,
        NewFollowing: 3,
        LostFollower: 4,
        LostFollowing: 5
    };
}