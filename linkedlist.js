function ListNode(element) {
    this.element = element;
    this.next = null;

}


function LinkedList(head=null) {
    this.head = head;
    this.length = 0;
}

LinkedList.prototype.append = function(element){
        const nextNode = new ListNode(element);
        let current;
        if(this.head === null){
            this.head = nextNode;
        }
        else{
            current = this.head;
            while (this.current != null){
                current = current.next
            }
            this.current.next = this.nextNode;
        }

        this.length++;
    };

let list = new LinkedList();
list.append(15);
list.append(10);
console.log(list);

