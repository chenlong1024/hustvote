package com.hustvote.hustvote.utils;

/**
 * Created by chenlong on 14-12-18.
 */
public class C {
    public class Net {
        public final static String SiteUrl = "http://10.42.0.1:8088/";
        public final static String BaseUrl = SiteUrl + "server/";
        public final static String SUCC_CODE = "1000";
        public class API {
            public final static String Login = "s_user/login";
            public final static String getUserInfo = "s_user/getUserInfo";
            public final static String Logout = "s_user/logout";

            public final static String getVoteList = "s_vote/getVoteList";
            public final static String getNewVote = "s_vote/getNewVote";
            public final static String getVoteDetail = "s_vote/getVoteDetail";
            public final static String getChoiceDetail = "s_vote/getChoiceDetail";
            public final static String getVoteLog = "s_vote/getVoteLog";
            public final static String doJoinVote = "s_vote/doJoinVote";
            public final static String doGetVoteResult = "s_vote/getVoteResult";

            public final static String doGetCaptcha = BaseUrl +"s_vote/captcha";
        }
    }
}
