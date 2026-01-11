
//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function campareNumbers (m,n) {
    if (m>n)
        return m;
    else if (m<n)
        return n;
    else
    return 0;
}
console.log(campareNumbers(5, 8))
//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function sum (a,b) {
    return a+b;
}
console.log (sum(5,8));
//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function printName () {
console.log ("ketevan glonti")
}
printName()
//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function getfullname (firstName,lastName){
    return firstName + " " + lastName;
}
console.log (getfullname("ketevan" ,"glonti"));
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function getproduct (n) {
    let result =1
    for (let i=1;i<=n;i++) {
        result *=i;

    }
    return result
}
    console.log (getproduct(5));
    //6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
    const student ={
        firstName: "ketevan",
        lastName: "glonti" ,
        age:28,
        scores:[4,7,5,3,2],
        fullName: function(){
            return this.firstName + " " + this.lastName;

        }
    }
    console.log(student.fullName());
    //7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
    function getscoresSum (scores) {
        let sum =0
    for (let i=0;i<scores.length;i++) {
        sum += scores[i];
    }
    return sum;
}
console.log (getscoresSum (student.scores));

// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log (student.firstName + " " + student.age);
