export class ApiConstants {
    public static ENDPOINT = 'https://localhost:7294/';
    public static STATISTIC_GET_USER_INFO = ApiConstants.ENDPOINT + 'Statistic/GetUserInfo/';
    public static STATISTIC_UPDATE_FOLLOWERS_AND_FOLLOWING = ApiConstants.ENDPOINT + 'Statistic/UpdateFollowersAndFollowing/';
    public static STATISTIC_GET_FOLLOWERS_AND_FOLLOWING = ApiConstants.ENDPOINT + 'Statistic/GetFollowersAndFollowing/';
    public static ACCOUNT_LOGIN = ApiConstants.ENDPOINT + 'Account/Login';
    public static ACCOUNT_LOGOUT = ApiConstants.ENDPOINT + 'Account/Logout/';
    public static ACCOUNT_GET_USER_PHOTO_URL = ApiConstants.ENDPOINT + 'Account/GetUserPhotoUrl/';
}