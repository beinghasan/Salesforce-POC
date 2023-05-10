public with sharing class NewsController {
    
    @AuraEnabled(cacheable=true)
    public static Map<string, object> getNews(){
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint('https://newsapi.org/v2/top-headlines?country=in&apiKey=f0d7a05662b6487b8090bc0717e56407');
        httpRequest.setMethod('GET');

        Map<string, object> newsJsonData = new Map<string, object>();
        string strResponse = null;

        try {
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpRequest);

            if(httpResponse.getStatusCode() == 200){
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }
            
        } catch (Exception ex) {
            throw ex;
        }
        
        if(!String.isBlank(strResponse)){
            newsJsonData = (Map<String, Object>) JSON.deserializeUntyped(strResponse);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        } else {
            return null;
        }
    }
}