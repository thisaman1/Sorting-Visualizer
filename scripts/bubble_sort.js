
function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="O(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        var swapped = false;
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
                swapped = true;
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        if (!swapped) {
            for (var k = 0; k < array_size; k++) {
                div_update(divs[k], div_sizes[k], "green"); // Mark all elements as green
            }
            break; // No swaps, array is already sorted
        }

        div_update(divs[j], div_sizes[j], "green"); // Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}

