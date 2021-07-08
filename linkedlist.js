function ListNode(element) {
    this.element = element;
    this.next = null;

}


function LinkedList(head = null) {
    this.head = head;
    this.size = 0;
}

LinkedList.prototype.add = function(element){
    let node = new ListNode(element);
    let current;
    
    if(this.head == null){
        this.head = node;
    }
    else{
        current = this.head;
        while(current.next ){
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
};

//test code
let list = new LinkedList();
list.add(10);
list.add(15);

console.log(list);

