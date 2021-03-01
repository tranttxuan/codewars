def descending_order(num):
    
    # for i in range(0, len(str(num)),1):
    #     list.append((str(num)[i:i+1]))
    # return list

    list = [char for char in str(num)]

    return int(''.join(sorted(list, reverse=True)))


print(descending_order(42145))



