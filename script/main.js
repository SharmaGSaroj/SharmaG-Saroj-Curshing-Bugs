(() => {
		let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZones = document.querySelectorAll(".drop-zone");


		function changeBgImg() 
		{
			// debugger;
			gameBoard.style.backgroundImage=`url(images/backGround${this.dataset.bgref}.jpg)`;

		
		}
		function dragStarted(event){
			console.log('started draginng a piece')
			;
			event.dataTransfer.setData('currentItem', event.target.id);
			
		}
		function allowDragOver(event){
			event.preventDefault();
			console.log('dragged over me');
		}
		function allowDrop(event){
			event.preventDefault();
			console.log('dropped me ');

			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);

			this.appendChild(document.querySelector(`#${droppedEl}`))
			console.log(droppedEl);
		}



		theThumbnails.forEach(item => item.addEventListener("click",changeBgImg));

		puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

		dropZones.forEach(zone => {
			zone.addEventListener("dragover", allowDragOver);
			zone.addEventListener("drop", allowDrop);
		});

})();
