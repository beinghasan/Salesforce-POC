public with sharing class DatatableStylingDemo {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsData(){
        return [Select Id, Name, AnnualRevenue, Industry, Phone from Account LIMIT 10];
    }

}
