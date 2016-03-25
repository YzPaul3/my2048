documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosTop(i,j){
	return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft(i,j){
	return cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(number){

	switch(number){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}

	return "black";
}

function getNumberColor(number){
	if(number <= 4)
		return "#776e65";

	return "white";
}

function nospace(board){

	for(var i=0; i<4; i++)
	{
		for(var j=0; j<4; j++)
		{
			if(board[i][j] == 0)
				return false;
		}
	}
	return true;
}

function canMoveLeft(board){
	// 判断能不能向左移动（右三列判断，因为最左一列已经无法移动）
	// 1、左边是否没有数字
	// 2、左边数字是否和自己相等
	for(var i=0; i<4; i++){
		for(var j=1; j<4; j++){
			if(board[i][j]!=0)
				if(board[i][j-1] ==0 || board[i][j-1]==board[i][j])
					return true;
		}
	}
	return false;
}

function canMoveRight(board){
	// 判断能不能向右移动（左三列判断）
	// 1、右边是否没有数字
	// 2、右边数字是否和自己相等
	for(var i=0; i<4; i++){
		for(var j=2; j>=0 ; j--){
			if(board[i][j]!=0)
				if(board[i][j+1] ==0 || board[i][j+1]==board[i][j])
					return true;
		}
	}
	return false;
}


function canMoveUp(board){
	//判断能不能向上移动（下三行判断）
	//1、上边是否没有数字
	//2、上边数字是否和自己相等
	for(var j=0; j<4; j++){
		for(var i=1; i<4; i++){
			if(board[i][j]!=0)
				if(board[i-1][j] ==0 || board[i-1][j]==board[i][j])
					return true;
		}
	}			
	return false;
}

function canMoveDown(board){
	//判断能不能向下移动（上三行判断）
	//1、下边是否没有数字
	//2、下边数字是否和自己相等
	for(var j=0; j<4; j++){
		for(var i=2; i>=0; i--){
			if(board[i][j]!=0)
				if(board[i+1][j] ==0 || board[i+1][j]==board[i][j])
					return true;
		}
	}			
	return false;
}

function noBlockHorizontal(row, col1, col2, board){
	for(var i = col1+1; i<col2; i++){
		if( board[row][i] != 0){
			return false;
		}
	}
	return true;
}


function noBlockVertical(row1, row2, col, board){
	for(var i=row1+1; i<row2; i++){
		if(board[i][col] != 0){
			return false;
		}
	}
	return true;
}

function nomove(board){
	if(canMoveUp(board)||canMoveDown(board)||canMoveRight(board)||canMoveLeft(board))
		return false;

	return true;
}