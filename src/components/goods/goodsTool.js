/**
 * Created by Administrator on 2018/5/12 0012.
 */

var tools={
    upDatePro(pro){
        let prods=this.getProds();
        prods[pro.id]=prods[pro.id]?prods[pro.id]+pro.num:pro.num;
        this.setProds(prods);

    },
    getProds(){
        return JSON.parse(window.localStorage.getItem('prods')||'{}');
    },
    setProds(prods){
        window.localStorage.setItem('prods',JSON.stringify(prods));
    },
    getCount(){
        let prods=this.getProds();
        let num=0;
        for(var key in prods){
            num+=prods[key];
        }
        return num;
    },
    delone(id){
      let prods=this.getProds();
        // ɾ�������key
        delete prods[id];
        console.log(id)
        //�洢
        this.setProds(prods);   // ɾ�������key

    }

}
export default tools;